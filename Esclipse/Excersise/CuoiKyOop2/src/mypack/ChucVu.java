package mypack;

public class ChucVu {
	private String maCV;// PK
	private String tenCV;

	public ChucVu(String maCV, String tenCV) {
		this.maCV = maCV;
		this.tenCV = tenCV;
	}

	public String getMaCV() {
		return maCV;
	}

	public void setMaCV(String maCV) {
		this.maCV = maCV;
	}

	public String getTenCV() {
		return tenCV;
	}

	public void setTenCV(String tenCV) {
		this.tenCV = tenCV;
	}
}
