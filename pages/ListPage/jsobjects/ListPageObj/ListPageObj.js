export default {
	delete (id) {
		console.log(id)
		DeleteFile.run({id: id}).then(() => {
			GetList.run()
			closeModal("Modal1")
			showAlert("Delete file success", "success")
		}).catch(() => showAlert("Delete file failed", "error"))
	},
}