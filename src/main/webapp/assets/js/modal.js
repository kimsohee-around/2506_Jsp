// 전역 변수
//     let carData = [];

// 폼 submit
function submitForm(){
	// input 요소 가져오기
/*	const carBrand = document.getElementById("carBrand");
	const carModel = document.getElementById("carModel");
	const carVolume = document.getElementById("carVolume");
	const carWeight = document.getElementById("carWeight");
	const carCo2 = document.getElementById("carCo2");*/
	// form 태그 만들기
	const form = document.createElement('form')
	form.method='POST'  // 저장은 반드시 POST
	form.action = 'CarSave'
	// name 속성 배열
	const carData = ['carBrand','carModel','carVolume','carWeight','carCo2']
	// 모달의 모든 input 가져오기
	document.querySelectorAll('.modal-body input').forEach((input,index) => {
		input.name = carData[index]    // name 속성 값 
		form.appendChild(input)			// form 태그의 자식으로 추가하기
	})
	
/*	form.appendChild(carModel)
	form.appendChild(carVolume)
	form.appendChild(carWeight)
	form.appendChild(carCo2)*/
	
	document.body.appendChild(form)
	form.submit();      // form 요소의 submit() 실행
	document.body.removeChild(form)   // form 변수로 지정된 요소를 제거
	closeModal()
}



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
     
 }