const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, "raman12", function (err, token) {
            if (err) return reject(err);
            return resolve(token);
        })
    })
}
module.exports = async (req, res, next) => {
    const bearerToken = req?.headers?.authorization;
    if (!bearerToken || !bearerToken.startsWith("Bearer "))
        return res.status(400).json({
            status: "failed",
            message:"please priovide-0 anew email"
        })
    const token = bearerToken.split(" ")[1];
    let user;
    try {
        user = await verifyToken(token);
    }
    catch(e){
        return res.json({
            status: "failed",
            message:"please priovide-1 anew email"
        })
    }
    if (!user) {
        return res.json({
            status: "failed",
            message:"please priovide-2anew email"
        })
    }
    req.user = user;
    return next();
}