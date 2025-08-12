// 현재 페이지의 데이터를 표시하는 함수
 function displayCurrentPage() {
     const containerElement = document.getElementById('cars-container');
     const pageInfoElement = document.getElementById('page-info');
     
     // 현재 페이지에 표시할 데이터 계산
     const startIndex = (currentPage - 1) * itemsPerPage;
     const endIndex = startIndex + itemsPerPage;
     const currentPageData = allCars.slice(startIndex, endIndex);
     
     // 컨테이너 초기화
     containerElement.innerHTML = '';
     
     // 페이지 정보 업데이트
     const totalPages = Math.ceil(allCars.length / itemsPerPage);
     pageInfoElement.innerHTML = `
         <span id="current-page-info">
             페이지 ${currentPage} / ${totalPages} 
             (전체 ${allCars.length}개 중 ${startIndex + 1}-${Math.min(endIndex, allCars.length)}번째)
         </span>
     `;
     
     // 컨테이너와 페이지 정보 표시
     containerElement.style.display = 'grid';
     pageInfoElement.style.display = 'block';
     
     // 카드 생성
     displayCarCards(currentPageData, startIndex);
 }

 // 차량 카드를 생성하고 표시하는 함수
 function displayCarCards(cars, startIndex) {
     const container = document.getElementById('cars-container');
     
     cars.forEach((car, index) => {
         const card = createCarCard(car, startIndex + index + 1);
         container.appendChild(card);
     });
 }

 // 페이징 컨트롤을 설정하는 함수
 function setupPagination() {
     const paginationElement = document.getElementById('pagination');
     const totalPages = Math.ceil(allCars.length / itemsPerPage);
     
     if (totalPages <= 1) {
         paginationElement.style.display = 'none';
         return;
     }
     
     paginationElement.style.display = 'flex';
     
     // 이전/다음 버튼 이벤트 리스너
     const prevBtn = document.getElementById('prev-btn');
     const nextBtn = document.getElementById('next-btn');
     
     prevBtn.onclick = () => changePage(currentPage - 1);
     nextBtn.onclick = () => changePage(currentPage + 1);
     
     updatePaginationButtons();
 }

 // 페이징 버튼 상태 업데이트
 function updatePaginationButtons() {
     const totalPages = Math.ceil(allCars.length / itemsPerPage);
     const prevBtn = document.getElementById('prev-btn');
     const nextBtn = document.getElementById('next-btn');
     const pageNumbersContainer = document.getElementById('page-numbers');
     
     // 이전/다음 버튼 상태
     prevBtn.disabled = currentPage === 1;
     nextBtn.disabled = currentPage === totalPages;
     
     // 페이지 번호 버튼 생성
     pageNumbersContainer.innerHTML = '';
     
     // 페이지 번호 범위 계산 (최대 5개 표시)
     let startPage = Math.max(1, currentPage - 2);
     let endPage = Math.min(totalPages, currentPage + 2);
     
     // 첫 페이지가 범위에 없으면 추가
     if (startPage > 1) {
         addPageButton(1);
         if (startPage > 2) {
             addEllipsis();
         }
     }
     
     // 현재 범위의 페이지 버튼들
     for (let i = startPage; i <= endPage; i++) {
         addPageButton(i);
     }
     
     // 마지막 페이지가 범위에 없으면 추가
     if (endPage < totalPages) {
         if (endPage < totalPages - 1) {
             addEllipsis();
         }
         addPageButton(totalPages);
     }
 }

 // 페이지 버튼 추가
 function addPageButton(pageNumber) {
     const pageNumbersContainer = document.getElementById('page-numbers');
     const button = document.createElement('button');
     button.className = `page-number ${pageNumber === currentPage ? 'active' : ''}`;
     button.textContent = pageNumber;
     button.onclick = () => changePage(pageNumber);
     pageNumbersContainer.appendChild(button);
 }

 // 생략 표시(...) 추가
 function addEllipsis() {
     const pageNumbersContainer = document.getElementById('page-numbers');
     const ellipsis = document.createElement('span');
     ellipsis.className = 'page-ellipsis';
     ellipsis.textContent = '...';
     pageNumbersContainer.appendChild(ellipsis);
 }

 // 페이지 변경
 function changePage(newPage) {
     const totalPages = Math.ceil(allCars.length / itemsPerPage);
     
     if (newPage < 1 || newPage > totalPages || newPage === currentPage) {
         return;
     }
     
     currentPage = newPage;
     displayCurrentPage();
     updatePaginationButtons();
     
     // 페이지 변경 시 스크롤을 맨 위로
     window.scrollTo({ top: 0, behavior: 'smooth' });
 }