import { Schema, model } from "mongoose";

// TENEMOS EL MODELO DE TAREAS CONFORMADO POR EL ESQUEMA DEBAJO

const taskSchema = new Schema(
  {
    // ASI NOS PERMITE PONERLE "CONDICIONES A LO QUE CARGAMOS"
    title: {
      type: String,
      required: true,
      unique: true,
      // LIMPIA EL STRING, SACA LOS ESPACIONS EXTRAS AL INICIO Y FIN
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    // ESTE NOS PERMITE AÑADIR AUTOMATICAMENTE UNA FECHA DE CREADO Y ACTUALIZADO
    timestamps: true,
    // PARA QUE POR DEFECTO NO NOS PONGA EL __V
    versionKey: false,
  }
);

export default model("Task", taskSchema);
