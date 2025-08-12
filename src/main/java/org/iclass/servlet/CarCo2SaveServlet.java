package org.iclass.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

import org.iclass.dto.CarDto;

@WebServlet("/CarSave")
public class CarCo2SaveServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public CarCo2SaveServlet() {
        super();
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String carBrand = request.getParameter("carBrand");
		String carModel = request.getParameter("carModel");
		String carVolume = request.getParameter("carVolume");
		String carWeight = request.getParameter("carWeight");
		String carCo2 = request.getParameter("carCo2");
		
		CarDto dto = new CarDto(carBrand, carModel, 
				Integer.parseInt(carVolume), 
				Integer.parseInt(carWeight), 
				Integer.parseInt(carCo2)
				);
		System.out.println("모든 파라미터 값 : " + dto);
		
	}

}
