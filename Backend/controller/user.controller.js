// user.controller.js
const { pool } = require("../config/db.config");
const path = require("path");
const fs = require("fs");
const { error } = require("console");
const { ok } = require("assert");
const { access, unlink } = fs.promises;

const uploadDir = path.join(__dirname, "/uploads/");

exports.createUser = async (req, res) => {
  try {
    const body = req.body;

    // Normalize skills: expect JSON stringification on frontend
    // let skills = [];
    // if (body.skills) {
    //   try {
    //     skills = typeof body.skills === "string" ? JSON.parse(body.skills) : body.skills;
    //     if (!Array.isArray(skills)) skills = [];
    //   } catch (err) {
    //     skills = String(body.skills).split(",").map(s => s.trim()).filter(Boolean);
    //   }
    // }

    const filePath = req.file ? `/uploads/${req.file.filename}` : null;

    const sql = `
      INSERT INTO from_input
        (name, email, phone, address, apply_for, salary, employ_time, degree, study_field, start_year, end_year, skills, file_path, url, long_text, declaration, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const params = [
      body.name ?? "",
      body.email ?? "",
      body.phone ?? "",
      body.address ?? "",
      body.apply ?? "",
      body.salary ?? "",
      body.employTime ?? "",
      body.degree ?? "",
      body.studyField ?? "",
      body.startYear ?? "",
      body.endYear ?? "",
      body.skills ?? JSON.stringify([]),
      filePath,
      body.url ?? "",
      body.longText ?? "",
      body.declaration === "true" || body.declaration === true ? 1 : 0,
      "pending",
    ];

    console.log(params);

    const [result] = await pool.execute(sql, params);
    res.status(201).json({ ok: true, id: result.insertId });
  } catch (err) {
    console.error("Error saving application:", err);
    res.status(500).json({ ok: false, error: "Server error" });
  }
};

exports.getUser = async (req, res) => {
  try {
    const query = `SELECT * FROM from_input WHERE status != 'rejected'`;

    const [result] = await pool.query(query);

    const users = result.map((user) => {
      try {
        return {
          ...user,
          skills: JSON.parse(user.skills || "[]"), // safely parse or default to empty array
        };
      } catch {
        return {
          ...user,
          skills: [],
        };
      }
    });

    res.status(200).json({
      message: "Fetching data Successful",
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

/*
exports.deleteUser = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ ok: false, error: "Missing id parameter" });
  }
  try {
    // 1) get file path
    const [rows] = await pool.query(
      "SELECT file_path FROM from_input WHERE id = ?",
      [id]
    );

    console.log(rows);

    if (!rows || rows.length === 0)
      return res
        .status(404)
        .json({ ok: false, message: "Applicant not found" });

    const filePathFromDb = (await rows[0].file_path) || null;

    if (filePathFromDb && rows.length !== 0) {
      try {
        console.log(filePathFromDb);

        const relative = filePathFromDb.startsWith("/")
          ? filePathFromDb.slice(1)
          : filePathFromDb;
        // console.log(uploadDir);
        const absolutePath = path.join(__dirname, "..", relative);
        // console.log(absolutePath);
        const filename = filePathFromDb.split("uploads/")[1];

        const uploadsDir = path.resolve(process.cwd(), "uploads");

        // Safety: allow deletion only if file lives under uploadsDir
        if (
          !absolutePath.startsWith(uploadsDir + path.sep) &&
          absolutePath !== uploadsDir
        ) {
          console.warn(
            "Refusing to delete file outside uploads directory:",
            absolutePath
          );
        } else {
          // async file operations

          try {
            await access(absolutePath, fs.constants.F_OK); // throws if doesn't exist
            await unlink(absolutePath);
            console.log("Deleted file:", filename);
          } catch (err) {
            if (err.code === "ENOENT") {
              console.warn("File not found (skipping delete):", filename);
            } else {
              console.error("Error deleting file:", err);
            }
            // continue — file absence should not block DB deletion
          }
        }
      } catch (err) {
        console.error("Error removing file from disk", err);
      }
    }

    // 2) delete file path
    const [results] = await pool.query(`Delete FROM from_input WHERE id = ?`, [
      id,
    ]);

    if (results.affectedRows === 0)
      return res
        .status(404)
        .json({ ok: false, message: "Applicant not found or already deleted" });

    res
      .status(200)
      .json({ ok: true, message: "Applicant deleted successfully" });
  } catch (err) {
    console.error("Error deleting applicant", err);
    res.status(500).json({ ok: false, error: "Server error" });
  }
};
*/

exports.softDeleteUser = async (req, res) => {
  const id = req.params.id;
  // console.log(id);

  if (!id)
    return res.status(404).json({ ok: false, error: "Missing id paramter" });

  try {
    // 1) checking user if exists
    const [rows] = await pool.query("Select * FROM from_input WHERE id = ?", [
      id,
    ]);
    // console.log(rows);
    if (!rows || rows.length === 0)
      return res.status(404).json({ ok: false, error: "Applicant not found" });

    // 2) updating the user status(soft deleting)
    const [results] = await pool.query(
      "UPDATE from_input SET status = 'rejected' WHERE id = ?",
      [id]
    );

    res
      .status(200)
      .json({ ok: true, message: "Applicant deleted successfully" });
  } catch (err) {
    console.error("Error soft deleting user: ", err);
    res.status(500).json({ ok: false, error: "Server error" });
  }
};
