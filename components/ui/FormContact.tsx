import React, { FC, useState } from "react";
import styles from "./form.module.css";
import { Products } from "@/interfaces";
import leadsApi from "@/apis/leadApi";
import { useRouter } from "next/router";

interface Props {
  item: Products;
  closeForm: () => void;
}

const FormContact: FC<Props> = ({ item, closeForm }) => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    interestedProduct: {
      model: item.model,
      price: item.price,
      description: item.description,
    },
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let errors = formErrors;

    switch (name) {
      case "name":
        errors.name = value ? "" : "Name is required";
        break;
      case "lastName":
        errors.lastName = value ? "" : "Lastname is required";
        break;
      case "email":
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errors.email = emailPattern.test(value) ? "" : "Email is invalid";
        break;
      case "phone":
        const phonePattern = /^\d{11,}$/;
        errors.phone = phonePattern.test(value)
          ? ""
          : "Número de teléfono no es válido";
        break;
    }

    setFormErrors(errors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isValidForm()) {
      console.log("Form data submitted:", formData);
      const response = await leadsApi.post("/lead", formData);
      router.push("/thanks")
      closeForm();
      setFormData({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        interestedProduct: {
          model: item.model,
          price: item.price,
          description: item.description,
        },
      });
    } else {
      console.error("Form data is not valid:", formErrors);
    }
  };

  const isValidForm = () => {
    const { name, lastName, email, phone } = formErrors;
    return name === "" && lastName === "" && email === "" && phone === "";
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className="containerForm">
        <div className={styles.row}>
          <div className={styles.fieldName}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {formErrors.name && <span>{formErrors.name}</span>}
          </div>
          <div className={styles.fieldName}>
            <label htmlFor="lastName">Lastname</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            {formErrors.lastName && <span>{formErrors.lastName}</span>}
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {formErrors.email && <span>{formErrors.email}</span>}
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {formErrors.phone && <span>{formErrors.phone}</span>}
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormContact;
