import {TokenDecoded} from "../utility/TokenUtility.js";

export default (req, res, next) => {

    const token = req.cookies['Token'];

    const Decode = TokenDecoded(token);

    if(Decode === null){
        return res.status(401).json({ status: 401, message: "Unauthorized user!" });
    }else{

        const email = Decode['email'];
        const userId = Decode['userId'];
        req.headers.email = email;
        req.headers.userId = userId;

        next();

    }

}