$(document).ready(function () {
  $('#table').DataTable({
    // "processing": true,
    // // "serverSide": true,
    order: [[1, 'desc']],
  });
});

// setInterval(() => {
//   $(document).ready(function () {
//     $('#table').DataTable({
//       // "processing": true,
//       // // "serverSide": true,
//       order: [[1, 'desc']],
//     });
//   });
// }, 1000);