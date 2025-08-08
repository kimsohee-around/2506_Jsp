package org.iclass.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

// 서블릿 - HTTP 요청을 처리하고 응답(html 페이지 또는 json)을 리턴하는 자바 클래스
@WebServlet({ "/Hello", "/hello" })
public class HelloServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public HelloServlet() {
        super();
    }

    // GET 요청을 처리하는 메소드 (인자는 요청과 응답)
    //   ㄴ  응답 : 1) html 페이지   2) REST API - json   3) 문자열 출력
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	// POST 요청을 처리하는 메소드 (인자는 요청과 응답)
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		doGet(request, response);
	}

}
