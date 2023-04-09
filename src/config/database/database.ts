import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
    connectionString: "postgres://kpagertj:7Sp8cpmuGSjYjtDHda99YcTqAVeHVmBc@mahmud.db.elephantsql.com/kpagertj"
})

export{ connection }