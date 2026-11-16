# Student Management System - Cloud Architecture Case Study

## Web Hosting, Domain Names, and the Role of DNS

### Student Metadata
* **Student Name:** Harsha
* **Roll Number:** A24126552075
* **Branch:** Computer Science & Engineering (AI & ML)
* **Institution:** Anil Neerukonda Institute of Technology and Sciences (ANITS), Visakhapatnam
* **Course:** Web Application Architecture & Cloud Deployment
* **Allocated Question:** **Q1 (5 Marks)**
* **Course Outcome:** CO1 | Bloom's Taxonomy: L2 (Understand)

---

## 📌 Question Statement
> *"Explain the concepts of web hosting and domain names. Describe the role of DNS in making a deployed web application accessible to users."*

---

## 📖 Executive Summary
This case study evaluates the core internet infrastructure required to make the **Student Management System (SMS)** globally accessible:
1. **Web Hosting:** Storage, compute (RAM/CPU), and network bandwidth provisioned across cloud platforms (Vercel for React frontend edge caching, Render for persistent Node/Express API runtime).
2. **Domain Names:** Human-readable hierarchical aliases (`student-portal.vercel.app` / `anits-sms.in`) replacing complex, rotating numerical IP addresses.
3. **Domain Name System (DNS):** The decentralized naming database that resolves human domain queries to machine-routable IP addresses via recursive resolution (Root $\rightarrow$ TLD $\rightarrow$ Authoritative Nameservers).

---

## 📁 Repository Contents

| File / Folder | Description |
| :--- | :--- |
| **`Case_Study_Web_Hosting_Domain_DNS.pdf`** | Complete 20-page comprehensive technical report covering hosting models, domain hierarchy, DNS lifecycle, and case study request workflows. |
| **`screenshots/`** | Visual command-line verification of DNS lookup, hierarchy tracing, and HTTP server handshake. |

---

## 🛠️ Verification & Practical Demonstration

### 1. DNS Resolution (`nslookup`)
Demonstrates translating the domain into an IPv4 address:
```bash
nslookup vercel.com
```
![DNS Resolution](screenshots/01_dns_resolution_nslookup.png)

### 2. DNS Tree Hierarchy Traversal (`dig +trace`)
Demonstrates iterative query traversal from Root (`.`) down to authoritative nameservers:
```bash
dig vercel.com +trace
```
![DNS Trace](screenshots/02_dns_hierarchy_trace_dig.png)

### 3. CNAME Alias Resolution
Demonstrates how platform subdomains alias underlying cloud infrastructure:
```bash
dig CNAME render.com
```
![CNAME Lookup](screenshots/03_cname_alias_lookup.png)

### 4. Web Hosting HTTP Connectivity (`curl -I`)
Demonstrates TLS handshake and edge server response headers:
```bash
curl -I https://vercel.com
```
![HTTP Response](screenshots/04_web_hosting_http_response.png)

---

## 📚 Key References
* **RFC 1034 & RFC 1035:** Domain Names - Concepts, Facilities, and Implementation
* **Cloudflare Learning Center:** What is DNS? & How DNS Works
* **MDN Web Docs:** How the Web Works: Web Hosting and IP Addressing
