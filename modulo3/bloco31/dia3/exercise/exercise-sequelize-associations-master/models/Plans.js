const Plans = (sequelize, DataTypes) => {
  const Plans = sequelize.define("Plans", {
    plan_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    coverage: DataTypes.STRING(45),
    price: DataTypes.DOUBLE,
  },
  {
    timestamps: false,
  });

  Plans.associate = (models) => {
    Plans.hasMany(models.Patients, {
      foreignKey: 'patient_id', as: 'patients'
    });
  };

  return Plans;
};

module.exports = Plans;