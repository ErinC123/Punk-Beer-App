function DivDlg(width, height, html){
	this.height = height;
	this.width = width;
	this.html = html;

	this.Draw = function(){
		var bgWrapper = document.createElement('div');
		bgWrapper.id = "dialogWrapper";
		bgWrapper.classList.add("bg_wrapper");

		var bgDiv = document.createElement('div');
		bgDiv.id = 'dialogDiv'
		bgDiv.classList.add("bg");
				
		var dialogDiv = document.createElement('div');
		dialogDiv.classList.add("dialog");
		dialogDiv.style.width = this.width;
		dialogDiv.style.height = this.height;

		var closeBtn = document.createElement('a');
		closeBtn.classList.add("closeBtn");
		closeBtn.innerHTML="<i class='fa fa-times fa-2x' style='color:white; margin-top:20px;margin-right:20px'></i>";
		closeBtn.onclick = function () {
    		dlgClose();
		};
				
		var contentDiv = document.createElement('div');
		contentDiv.classList.add("content");
		contentDiv.innerHTML = this.html;

		dialogDiv.appendChild(closeBtn);
		dialogDiv.appendChild(contentDiv);
		bgWrapper.appendChild(dialogDiv);
		bgWrapper.appendChild(bgDiv);
		document.body.appendChild(bgWrapper);
	}
}

function dlgClose(){
	document.body.removeChild(document.getElementById("dialogWrapper"));
}