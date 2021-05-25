const Surgeries = (sequelize, DataTypes) => {
  const Surgeries = sequelize.define("Surgeries", {
    surgery_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    specialty: DataTypes.STRING(50),
    doctor: DataTypes.STRING(50),
  },
  {
    timestamps: false,
  });

  return Surgeries;
};

module.exports = Surgeries;