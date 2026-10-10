const student = {
  name: "ณัฐณิชา ปกแก้ว",
  studentId: "68543210063-2",
  os: process.platform,
  node: process.version,
};

function createGreeting({ name, studentId, os, node }) {
  return `Hello ${name} (${studentId}) | OS: ${os} | Node: ${node}`;
}

console.log(createGreeting(student));