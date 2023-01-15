import { Sequelize } from "sequelize";
const sequelize = new Sequelize(
  "postgres://qsanlics:ZrXjidz22jzfg-aJAFIxcYovwLmemyUi@motty.db.elephantsql.com/qsanlics"
);
// const sequelize = new Sequelize({
//   dialect: "postgres",
//   username: "cmutavrjchtruc",
//   password: "f3f6fdfef5a8aea8f11a0088266823efe7a1bf3f6c9d1f0a2d1a66f69661a35d",
//   database: "ddjvh11lrer43c",
//   port: 5432,
//   host: "ec2-34-205-46-149.compute-1.amazonaws.com",
//   ssl: true,
//   // esto es necesario para que corra correctamente
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// });

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
// // espera al sync - > lo que hace es decirle a la base de datos que definimos un modelo y que lo queremos inicializar
// await sequelize.sync();

//postgres://qsanlics:ZrXjidz22jzfg-aJAFIxcYovwLmemyUi@motty.db.elephantsql.com/qsanlics
export { sequelize };
