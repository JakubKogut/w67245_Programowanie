const book = {
    title: "Lab4",
    author: "Anonim",
    Year: 2024,
    displayBookInfo: function() {
        return `${this.title} - ${this.author} (${this.Year})`;
    }
};

function displayBookInfo(item) {
return `${item.title} - ${item.author} (${item.Year})`;
}
console.log(this.displayBookInfo(book));
console.log(book.displayBookInfo());

function Person(name, surname, index, grades) {
    this.name = name;
    this.surname = surname;
    this.index = index;
    this.grades = grades;
    this.getAverage = () => {
        return (this.grades.grade1 + this.grades.grade2 + this.grades.grade3) /3
    }
}
const person = new Person("Test", "Test", "Test", {
    grade1: 4,
    grade2: 3,
    grade3: 4
});
console.log(person.getAverage());