"use client";

import { createContext, useState } from "react";

export const FormDataContext = createContext();

export default function FormProvider({ children }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    apply: "",
    salary: "",
    employTime: "",
    degree: "",
    studyField: "",
    startYear: "",
    endYear: "",
    skills: [],
    file: null,
    url: "",
    longText: "",
    skillDescription: "",
    declaration: false,
  });

  const changeHandler = (e) => {
    const { name, type, value, checked, files } = e.target;

    if (type === "checkbox") {
      if (name === "skills") {
        setForm((prev) => {
          const currentSkills = prev.skills || [];
          if (checked) return { ...prev, skills: [...currentSkills, value] };
          return { ...prev, skills: currentSkills.filter((s) => s !== value) };
        });
        return;
      }
      setForm((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    if (type === "file") {
      const newValue = files && files[0] ? files[0] : null;
      setForm((prev) => ({ ...prev, [name]: newValue }));
      return;
    }

    // Keep phone as string — don't coerce to Number
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <FormDataContext.Provider value={{ form, setForm, changeHandler }}>
      {children}
    </FormDataContext.Provider>
  );
}
