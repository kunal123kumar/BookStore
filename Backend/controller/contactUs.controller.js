import ContactUs from "../models/ContactUs.model.js";
export const postContactUs = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const contactUs = new ContactUs({ name, email, message });
        await contactUs.save();
        res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.log("Error sending message:", error);
        res.status(500).json({ error: error.message });
    }
}
