import Questions from "../model/questionModel.js";

export const create = async(req, res) => {
    try{
        const newQues = new Questions(req.body);

        const savedData = await newQues.save();
        res.status(200).json(savedData);
    }
    catch(error) {
        res.status(500).json({ errorMessage: error.message });
    }
} 

export const getQuesByQuesNo = async(req, res) => {
    try{
            const qnoparam = Number(req.params.qno);
            const userExist = await Questions.find({qnumber: qnoparam});
            res.status(200).json(userExist);
    }
    catch(error)
    {
        res.status(500).json({ errorMessage: error.message });      
    }
}