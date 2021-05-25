module.exports = (sequelize, _DataTypes) => {
  const PatientsSurgeries = sequelize.define('PatientsSurgeries',
    {},
    { timestamps: false,
      tableName: 'Patient_surgeries',
    },
  );

  PatientsSurgeries.associate = (models) => {
    models.Patients.belongsToMany(models.Surgeries, {
      as: 'surgeries',
      through: PatientsSurgeries,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });
    models.Surgeries.belongsToMany(models.Patients, {
      as: 'patients',
      through: PatientsSurgeries,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });
  };

  return PatientsSurgeries;
};