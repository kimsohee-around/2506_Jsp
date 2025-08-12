// 전역 변수
//     let carData = [];

 // 모달 열기
 function openModal() {
     clearForm();
     document.getElementById('carModal').classList.add('show');
 }

 // 모달 닫기
 function closeModal() {
     clearForm();
     document.getElementById('carModal').classList.remove('show');
 }
 
 // 폼 초기화
 function clearForm() {
     document.getElementById('carBrand').value = '';
     document.getElementById('carModel').value = '';
     document.getElementById('carVolume').value = '';
     document.getElementById('carWeight').value = '';
     document.getElementById('carCo2').value = '';
     
     // 에러 상태 초기화
     // clearErrors();
 }