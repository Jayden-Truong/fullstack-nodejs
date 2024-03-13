"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "admin@gmail.com",
        password: "123456",
        firstName: "Jayden",
        lastName: "Truong",
        address: "1234 Phan Van Tri, Go Vap, Ho Chi Minh",
        gender: 1,
        roleId: "R1",
        phoneNumber: "0777578060",
        positionId: "7894 Le Quang Dinh, Binh Thanh, Ho Chi Minh",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
