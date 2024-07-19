const bcrypt = require("bcrypt");
const saltRounds = 10;
const plainTextPassword1 = "DFGh5546*%^__90";
const hash1 = "$2b$10$4VpINbej6M9Ap9jAQ6kCmOuF7Y9Qts9pvNmsb5smwR/vNhiFrkvM6";
const hash2 = "$2b$10$wTKw04Q2aR2.Yduh.nQCF.4KbMHTRxKnlerldchBrS3NmHUVhlrN2";
const hash3 = "$2b$10$qor1fnYePH7nFo0xsAU2L.NBy5q2Ls.CVpgbE1BFWnKvp74GyuwLm";

bcrypt
  .genSalt(saltRounds)
  .then((salt) => {
    console.log(`Salt: ${salt}`);
    return bcrypt.hash(plainTextPassword1, salt);
  })
  .then((hash) => {
    console.log(`Hash: ${hash}`);
    // Store hash in your password DB.
  })
  .catch((err) => console.error(err.message));

bcrypt
  .compare(plainTextPassword1, hash3)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err.message));
