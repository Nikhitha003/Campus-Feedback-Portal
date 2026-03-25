const User = require("../models/User");

const seedDefaultAdmin = async () => {
  const adminEmail = (process.env.ADMIN_EMAIL || "admin@campusportal.com").toLowerCase();
  const existingAdmin = await User.findOne({ email: adminEmail });

  if (existingAdmin) {
    return;
  }

  await User.create({
    name: process.env.ADMIN_NAME || "Campus Admin",
    email: adminEmail,
    password: process.env.ADMIN_PASSWORD || "Admin@123",
    role: "admin",
    department: "Administration"
  });

  console.log(`Default admin created: ${adminEmail}`);
};

module.exports = seedDefaultAdmin;
