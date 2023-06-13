fetch('http://localhost:3000/hocsinh')
    .then(response => response.json())
    .then(data => {
    const studentList = document.getElementById('student-list');
    data.forEach(student => {
        const averageScore = (student.toan + student.van) / 2;
        const row = `
        <tr>
          <td>${student.id}</td>
          <td>${student.ten}</td>
          <td>${student.toan}</td>
          <td>${student.van}</td>
          <td>${averageScore}</td>
        </tr>
      `;
        studentList.insertAdjacentHTML('beforeend', row);
    });
});
