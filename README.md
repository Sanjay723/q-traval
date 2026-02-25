Q-Traval: Reverse Proxy Implementation on AWS EC2
This project demonstrates the implementation of a Reverse Proxy using NGINX hosted on an AWS EC2 instance. It was developed as part of a Linux and Cloud training program to showcase server management and web traffic routing capabilities.

🚀 Project Overview
The goal of this project was to configure an NGINX server to act as an intermediary for requests from clients seeking resources from other servers. This setup improves security, performance, and scalability.

🛠️ Tech Stack
Cloud Provider: AWS (EC2)

Web Server / Reverse Proxy: NGINX

Operating System: Linux (Ubuntu/Amazon Linux)

Frontend Framework: Next.js (as seen in the project structure)

Version Control: Git & GitHub

🏗️ Architecture
Client: Sends a request to the public IP/Domain of the EC2 instance.

NGINX (Reverse Proxy): Receives the request on Port 80 (HTTP) or 443 (HTTPS).

Application Server: NGINX forwards the request to the Next.js application running on a local port (e.g., Port 3000).

Response: The application sends the data back to NGINX, which then delivers it to the client.

⚙️ Configuration Highlights
To achieve this, I performed the following steps:

Provisioned and secured an AWS EC2 instance using Security Groups.

Installed and configured NGINX via the Linux CLI.

Modified the nginx.conf or created a site-specific configuration to define the proxy_pass directive.

Managed service status using systemctl to ensure high availability.

📂 Repository Structure
/src: Contains the Next.js application source code.

next.config.js: Configuration for the Next.js environment.

tailwind.config.ts: Styling configuration for the travel application UI.

🧠 Key Learnings
Configuring NGINX blocks for efficient request handling.

Managing Linux file permissions and service configurations.

Understanding the flow of traffic in a cloud-hosted environment.
