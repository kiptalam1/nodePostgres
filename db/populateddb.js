const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR (255)
);

INSERT INTO usernames (username)
VALUES 
    ('Bryan'),
    ('Odin'),
    ('Damon');
`;

// async function main() {
// 	console.log("seeding...");
// 	const client = new Client({
// 		connectionString: "postgresql://adams:adams@localhost:5432/top_users",
// 	});
// 	await client.connect();
// 	await client.query(SQL);
// 	await client.end();
// 	console.log("done");
// }
async function main() {
	console.log("seeding...");

	// Read connection string from command line argument
	const connectionString = process.argv[2];
	if (!connectionString) {
		console.error("❌ Please provide a DB connection string as an argument.");
		process.exit(1);
	}

	const client = new Client({ connectionString });

	try {
		await client.connect();
		await client.query(SQL);
		console.log("✅ Database seeded successfully!");
	} catch (err) {
		console.error("❌ Error seeding database:", err);
	} finally {
		await client.end();
	}
}


main();
