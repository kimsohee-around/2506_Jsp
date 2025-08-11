<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- jstl 태그 라이브러리 사용을 위한 설정 : 아래 uri 는 톰캣10,11버전 -->    
<%@ taglib prefix="c" uri="jakarta.tags.core" %>    
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
		<li><a href="">A1</a></li>
		<li><a href="">A2</a></li>
		<li><a href="">B1</a></li>
		<li><a href="">B1</a></li>
	</ul>
	<table>
		<tr>
			<th>번호</th>
			<th>카테고리</th>
			<th>상품명</th>
			<th>상품코드</th>
			<th>가격</th>
		</tr>
		
		<!-- 컬렉션 데이터를 하나씩 가져와서 tr 태그에 출력하는 반복  -->
		<c:forEach var="dto" items="${list }" varStatus="status">
		<!-- items 의 $ { } 기호는 list 이름 애트리뷰트값 가져옵니다.-->
		<tr>
			<td>${status.count  }</td>
			<td>${dto.pcode }</td>
			<td>${dto.category }</td>
			<td>${dto.pname }</td>
			<td>${dto.price }</td>
		</tr>
		</c:forEach>
	
	</table>
</body>
</html>