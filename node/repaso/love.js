var n = 6;

for (let i = n / 2; i < n; i += 2) {
  for (let j = 1; j < n - i; j += 2) {
    process.stdout.write(' ')
  }
  for (let j = 1; j < i + 1; j++) {
    process.stdout.write('♥')
  }
  for (let j = 1; j < n - i + 1; j++) {
    process.stdout.write(' ')
  }
  for (let j = 1; j < i + 1; j++) {
    process.stdout.write('♥')
  }
  console.log();
}
for (let i = n; i > 0; i--) {
  for (let j = 0; j < n - i; j++) {
    process.stdout.write(' ')
  }
  for (let j = 1; j < i * 2; j++) {
    process.stdout.write('♥')
  }
  console.log();
}
