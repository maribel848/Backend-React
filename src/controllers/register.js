const { createUser } = require("../dv");
const validator = require("validator")
const register = (req, res) => {
   const { email, password } = req.body;
   if (!email || !password) {
      return res.json({ message: "porfavor ingrese email y contraseña" })
   }
   if (!validator.isEmail(email)) {
      return res.json({ message: "por favor ingrese un correo electrónico de validación" })
   }
   const validPassword = validator.isStrongPassword(password, {
      minLength: 8,
      minLowerCase: 1,
      minUpperCase: 1,
      minNumbers: 1,
      minsymbols: 1,
   });
   if (!validPassword) {
      return res.json({
         message:
            "Por favor ingrese una contraseña válida. La contraseña debe tener al minimo 8 caracteres y debe contener al menos una letra minúscula, una letra mayúscula, un número y un símbolo"
      });
   }

   const newUser = createUser(email, password);
   res.send("register");
   if (!newUser) {
      return res.json({ message: "usuario ya existente" });
   }
   res.json({ message: "usuario creado con exito", user: newUser });
   res.status(500).json({ message: "Algo salio mal" })

}


module.exports = register;
