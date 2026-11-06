use axum::{
    Router,
    routing::{
        get
    }
};

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", get(|| async { "Hello, world!" }));

    let listener = tokio::net::TcpListener::bind("127.0.0.1:8080").await
        .expect("Failed to bind to port");
    axum::serve(listener, app).await
        .expect("Failed to serve API");
}
