document.addEventListener("DOMContentLoaded", () => {
    loadStudents();
});

async function loadStudents() {
    try {
        const response = await fetch("http://localhost:8080/api/students");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const students = await response.json();
        renderStudents(students);
    } catch (error) {
        console.error("Lỗi khi tải danh sách sinh viên:", error);
        document.getElementById("studentTableBody").innerHTML = `
            <tr>
                <td colspan="6" class="text-center text-danger py-3">
                    Không thể tải dữ liệu sinh viên. Vui lòng kiểm tra lại API!
                </td>
            </tr>
        `;
    }
}

function renderStudents(students) {
    const tbody = document.getElementById("studentTableBody");
    tbody.innerHTML = "";

    if (!students || students.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" class="text-center py-3">Không có sinh viên nào.</td>
            </tr>
        `;
        return;
    }

    students.forEach(student => {
        const row = `
            <tr>
                <td>${student.studentCode || ''}</td>
                <td>${student.fullName || ''}</td>
                <td>${student.email || ''}</td>
                <td>${student.phone || ''}</td>
                <td>${student.className || ''}</td>
                <td class="text-end">
                    <div class="table-actions d-flex justify-content-end gap-1">
                        <a class="btn btn-info btn-sm" href="index.html?page=form&id=${encodeURIComponent(student.id)}&mode=view" title="Xem">
                            <i class="bi bi-eye"></i>
                        </a>
                        <a class="btn btn-warning btn-sm" href="index.html?page=form&id=${encodeURIComponent(student.id)}&mode=edit" title="Sửa">
                            <i class="bi bi-pencil-square"></i>
                        </a>
                    </div>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}