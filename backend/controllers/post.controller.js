export const createPost = async (req, res) => {
    try {

    } catch (error) {
        console.log("Error in createPost: ", error.message);
        res.status(500).json({ error: "Error in Post controller!" });
    }
}