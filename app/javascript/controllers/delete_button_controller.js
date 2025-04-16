// app/javascript/controllers/delete_controller.js
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = { url: String };

  delete(event) {
    event.preventDefault();

    if (!confirm("本当に削除しますか？")) return;

    fetch(this.urlValue, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": document.querySelector("meta[name='csrf-token']")
          .content,
        Accept: "text/vnd.turbo-stream.html", // Turbo用
      },
    }).then((response) => {
      if (response.ok) {
        window.location.href = "/print_images"; // 成功後のリダイレクト先
      } else {
        alert("削除に失敗しました");
      }
    });
  }
}