const awesomeFunction = (req, res, next) => {
    res.json('Jenny Burner');
};

const returnanotherAnimal = (req, res, next) => {
    res.json('Hershey Burner');
};

const returnanotherAnimal2 = (req, res, next) => {
    res.json('Kit Burner');
};

module.exports ={awesomeFunction, returnanotherAnimal,returnanotherAnimal2}