<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- jstl 태그 라이브러리 사용을 위한 설정 : 아래 uri 는 톰캣10,11버전 -->    
<%@ taglib prefix="c" uri="jakarta.tags.core" %>    
<%@ taglib prefix="fmt" uri="jakarta.tags.fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>TBL_Proudct 상품</title>
</head>
<body>
	<h2>상품 목록</h2>
	<h3>카테고리 검색</h3>
	<ul>
		<li><a href="Search?category=A1">A1</a></li>
		<li><a href="Search?category=A2">A2</a></li>
		<li><a href="Search?category=B1">B1</a></li>
		<li><a href="Search?category=B2">B2</a></li>
	</ul>
	<table>
		<tr>
			<th>번호</th>
			<th>카테고리</th>
			<th>상품명</th>
			<th>상품코드</th>
			<th>가격</th>
		</tr>
		
		<!-- 컬렉션 데이터를 하나씩 가져와서 tr 태그에 출력하는 반복. 
		c 로 시작하는 태그는 반복,조건 등의 핵심(core) 구문을 지원. -->
		<c:forEach var="dto" items="${list }" varStatus="status">
		<!-- items 의 $ { } 기호는 'list 이름 애트리뷰트'값(request.getAttribute 실행)
		 가져옵니다. 'dto 변수'는 list 에서 하나씩 가져온 요소를 저장. -->
		<tr>
			<td>${status.count  }</td>  <!-- 'status 변수'는 forEach 실행정보 저장  -->
			<td>${dto.pcode }</td>
			<td>${dto.category }</td>
			<td>${dto.pname }</td>
			<%-- <td>${dto.price }</td> --%>
			<td>
			<!-- fmt 로 시작하는 태그는 출력 형식(format) 지정. -->
				<fmt:formatNumber value="${dto.price }" type="number"/>
			</td>
		</tr>
		</c:forEach>
	
	</table>
</body>
</html>