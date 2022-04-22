interface power{
    strength:string;
}

interface superPower extends power{
    superStrength:string;
}

let pow:power={
    strength:"Fire"
}

let superPow:superPower = {
    strength:"Rock",
    superStrength:"Muscles"
}