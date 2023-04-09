function convertCLTToPj(req, res) {
    var salary = req.query.salary;
    var newSalary = Number(salary) + (Number(salary) * 0.3);
    res.send({
        resultado: "O seu salario deve ser pelo menos ".concat(newSalary)
    });
}
export { convertCLTToPj, };
