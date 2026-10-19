var marks = 75; 
var studentName = "Rahim";

console.log("=== Student Result Sheet ===");
console.log("Student Name: " + studentName);
console.log("Obtained Marks: " + marks);

if (marks >= 80 && marks <= 100) {
    console.log("Grade: A+ (Outstanding!)");
} else if (marks >= 70 && marks < 80) {
    console.log("Grade: A (Very Good)");
} else if (marks >= 60 && marks < 70) {
    console.log("Grade: A- (Good)");
} else if (marks >= 50 && marks < 60) {
    console.log("Grade: B (Satisfactory)");
} else if (marks >= 40 && marks < 50) {
    console.log("Grade: C (Pass)");
} else if (marks >= 33 && marks < 40) {
    console.log("Grade: D (Barely Passed)");
} else if (marks >= 0 && marks < 33) {
    console.log("Grade: F (Failed - Need to study hard!)");
} else {
    console.log("Invalid Marks! Please enter a number between 0 and 100.");
}