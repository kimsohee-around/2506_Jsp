package org.iclass.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import org.iclass.dao.CarCO2Dao;
import org.iclass.dto.CarDto;

import com.google.gson.Gson;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/api/cars")
public class APICarJsonServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	 @Override
	    public void init() throws ServletException {
	    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 응답 설정
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        
        // 헤더 설정 (필요한 경우)
        response.setHeader("Access-Control-Allow-Origin", "*");  // CORS?
        response.setHeader("Access-Control-Allow-Methods", "GET");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");

        try {
        	CarCO2Dao dao = new CarCO2Dao();
        	List<CarDto> list = dao.getAllCars();
        	Gson gson = new Gson();
        	// list 자바 객체를 json 문자열(String 타입)로 바꾸기
        	String jsonString = gson.toJson(list);
        	
        	PrintWriter out = response.getWriter();
        	out.print(jsonString);
        	out.flush();
            
        } catch (Exception e) {
            // 에러 처리
        	// 오류 코드 500
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            PrintWriter out = response.getWriter();
            out.print("{\"error\": \"데이터 조회 중 오류가 발생했습니다.\"}");
            out.flush();
            e.printStackTrace();
        }
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
