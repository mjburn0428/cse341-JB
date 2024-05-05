const awesomeFunction = (req, res) => {
    res.json('Jenny Burner');
};

const returnanotherAnimal = (req, res) => {
    res.json('Hershey Burner');
};

const returnanotherAnimal2 = (req, res) => {
    res.json('Kit Burner');
};

module.exports ={awesomeFunction, returnanotherAnimal,returnanotherAnimal2}