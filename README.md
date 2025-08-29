<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>EquipEase - Borrowing</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="layout">
    <aside class="sidebar">
      <div class="logo">
        <img src="../images/Phayao.png" style="width: 100%; max-width: 600px; height: auto;">
        <h2>EquipEase</h2>
      </div>
      <ul class="menu">
        <li><a href="index.html"><img src="../images/index.png" alt="Home" width="20"> Home</a></li>
        <li><a href="items.html"><img src="../images/items.png" alt="Items List" width="20"> Items List</a></li>
        <li class="active"><a href="borrowing.html"><img src="../images/borrowing.png" alt="My Borrowing" width="20"> My Borrowing</a></li>
        <li><a href="history.html"><img src="../images/history.png" alt="history" width="20"> History</a></li>
      </ul>
    </aside>

    <main class="content">
      <h1>My Borrowing</h1>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Borrowing Date</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Volleyball</td>
              <td>MM/DD/YYYY</td>
              <td><span class="status available">Return Confirm</span></td>
            </tr>
            <tr>
              <td>Basketball</td>
              <td>MM/DD/YYYY</td>
              <td><span class="status borrowed">Overdue</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
  <script src="script.js"></script>
</body>
</html>
