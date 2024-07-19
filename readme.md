### Concepts

#### Salt Rounds

- `saltRounds` is a parameter that defines the cost factor for generating the salt. The higher the number, the more computationally expensive it is to generate the salt and hash the password. This makes it harder for attackers to crack the hash using brute force attacks.

#### Why Use Bcrypt Instead of SHA?

- **Bcrypt** is specifically designed for hashing passwords. It includes a salt to protect against rainbow table attacks and is computationally intensive to slow down brute force attacks.
- **SHA (Secure Hash Algorithm)** is a general-purpose cryptographic hash function. It is fast and not designed for hashing passwords. Using SHA for passwords is insecure because it does not include a salt and is vulnerable to brute force and rainbow table attacks.

#### Hash Comparison

- `hash1`, `hash2`, and `hash3` are precomputed hashes of the `plainTextPassword1`.
