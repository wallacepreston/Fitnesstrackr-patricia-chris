async function createActivity({
    id,
    name,
    description,
  }) {
    try {
  
    } catch (error) {
      throw error;
    }
  }

async function updateActivity(id, {
  name,
  description,
}) {
  try {

  } catch (error) {
    throw error;
  }
}

async function getAllActivity() {
  const { rows } = await client.query(`SELECT * FROM activities;`);

  return rows;
}


module.exports = {
    createActivity,
    updateActivity,
    getAllActivity,
 }
