---
title: "Run DeepSeek R1 Locally with LM Studio – Complete Guide"
seoTitle: "Run DeepSeek R1 Locally with LM Studio – Complete Guide"
seoDescription: "Now you can run DeepSeek R1 Locally with LM Studio. Follow this guide to setup."
datePublished: Tue Feb 11 2025 06:02:26 GMT+0000 (Coordinated Universal Time)
cuid: cm702rvln000b09kyfxwog03r
slug: run-deepseek-r1-locally-with-lm-studio-complete-guide
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1739253639515/7654b07d-b7be-40d3-9391-e0b45575a88d.jpeg
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1739253707644/d8b0a06b-417a-428d-8b87-fddc6abd3135.jpeg
tags: ai-model, lmstudio, deepseek, deepseekr1, ai-model-local-setup, use-deepseek-r1-locally-on-your-machine

---

## **Introduction**

AI is evolving rapidly, and while cloud-based AI services are great, they come with **privacy concerns**, **API limits**, and **server downtime**. What if you could run **DeepSeek R1** on your own machine without depending on external servers?

In this guide, I will walk you through installing [**LM Studio**](https://lmstudio.ai/) and running DeepSeek R1 1.5B model locally on **Windows**, **macOS**, and **Linux**. If you have ever wanted to experiment with AI models on your own machine, this guide is for you.

---

## **What is LM Studio?**

LM Studio is an **open-source tool** that allows you to run **large language models (LLMs) locally** on your computer. It provides an easy interface to **download, manage, and run AI models** without needing advanced technical knowledge.

### **Why Use LM Studio?**

* **No Internet Required** – Run AI models **offline** on your machine
    
* **No API Limits** – Use AI **without any restrictions**
    
* **Full Privacy** – Your queries and data stay **on your device**
    
* **Supports Multiple Models** – Run **DeepSeek AI, Mistral, LLaMA, Falcon, and more**
    

---

## **Installing LM Studio on Windows, macOS, and Linux**

### **Installing LM Studio on Windows**

1. **Download LM Studio** from the official website: [LM Studio Download](https://lmstudio.ai/)
    
2. Run the **installer (.exe file)** and follow the on-screen instructions
    
3. Once installed, open LM Studio
    

*📌* ***Tip:*** *If you are using a* ***GPU***, make sure your ***drivers are up to date*** *for better performance.*

---

### **Installing LM Studio on macOS**

1. Open **Terminal** and install Homebrew (if not already installed):
    
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    
2. Install LM Studio using Homebrew:
    
    ```bash
    brew install lm-studio
    ```
    
3. Launch LM Studio from the Applications folder or Terminal:
    
    ```bash
    lm-studio
    ```
    

*📌* ***Tip:*** *Mac users with* ***Apple Silicon (M1/M2/M3)*** *should use* ***Metal acceleration*** *for better AI model performance.*

---

### **Installing LM Studio on Linux**

1. Open Terminal and update your package manager:
    
    ```bash
    sudo apt update && sudo apt upgrade -y
    ```
    
2. Download LM Studio from the official site or install using Flatpak:
    
    ```bash
    flatpak install flathub ai.lmstudio.LMStudio
    ```
    
3. Run LM Studio:
    
    ```bash
    flatpak run ai.lmstudio.LMStudio
    ```
    

*📌* ***Tip:*** *Some Linux distros may require additional* ***CUDA dependencies*** *for* ***NVIDIA GPUs***.

---

## **Downloading and Running DeepSeek R1 Model**

Once **LM Studio is installed**, you need to **download the DeepSeek R1 model** and run it locally.

### **Download DeepSeek R1 Model**

1. Open **LM Studio**
    
2. Go to the **Model Catalog**
    
3. Search for **DeepSeek R1 1.5B**
    
4. Click **Download**
    

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1739253038112/8c02b591-79f5-4d2b-99b6-95a8002ed6a4.png align="center")

*📌* ***Tip:*** *DeepSeek AI* ***1.5B model*** *is lightweight compared to larger models like* ***DeepSeek R1 7B or 67B***, making it ***ideal for local experiments***.

---

### **Running DeepSeek R1 Locally**

Once the model is downloaded, follow these steps:

1. Open **LM Studio**
    
2. Navigate to the **Local Models** tab
    
3. Select **DeepSeek R1 1.5B**
    
4. Click **Run Model**
    

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1739253079126/c43e8b32-08a3-4446-8373-2729a3ee1f56.png align="center")

*📌* ***Tip:*** *If you have a* ***powerful GPU***, enable ***CUDA (for NVIDIA) or Metal (for Mac)*** *for better performance.*

---

## **Using DeepSeek AI for Local Queries**

After the model is running, you can **interact with DeepSeek AI directly**:

### **Querying DeepSeek AI in LM Studio**

Simply type your question in the **chatbox** and hit enter:

> "What are the latest trends in AI development?"

DeepSeek AI will process your request **locally** without requiring an internet connection.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1739253141120/b8061911-97d4-40f8-8b7c-e711e1b80b61.png align="center")

---

### **Using DeepSeek AI in Developer Mode (API Access)**

If you want to **integrate DeepSeek AI into your own applications**, use LM Studio’s **API mode**:

#### **Python Code to Use DeepSeek AI Locally**

```python
import requests

url = "http://localhost:8080/api/v1/chat"
data = {"prompt": "Generate Python code for a web scraper"}

response = requests.post(url, json=data)
print(response.json())
```

*📌* ***Tip:*** *You can* ***deploy this locally*** *for* ***company-wide AI automation*** *while keeping all data private.*

---

## **Why Do We Need Local AI Models?**

Running AI models locally has **several advantages** over cloud-based services like **ChatGPT, DeepSeek, or OpenAI APIs**:

* **Data Privacy** – No information leaves your device
    
* **No Server Downtime** – Unlike DeepSeek’s **busy servers**, local models are always available
    
* **Zero API Costs** – AI inference is **free on your own hardware**
    
* **Custom Fine-Tuning** – Modify AI models for **specific tasks**
    

However, there’s a trade-off: **Larger AI models require massive hardware**, making full-scale LLM deployment difficult on consumer devices.

*📌* ***Example:*** ***DeepSeek AI’s 67B model*** *requires a* ***480GB GPU***, which is impractical for home use.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1739253355322/9d6d2ac3-fb21-47b5-8499-ba00547507c2.jpeg align="center")

---

## **Final Thoughts & Next Steps**

DeepSeek R1 1.5B model with LM Studio is a great way to experiment with AI locally without relying on external servers. While it may not match the performance of cloud-based LLMs, it provides greater control, privacy, and availability.

If you want to run larger AI models, consider upgrading your GPU, using cloud GPUs, or setting up AI clusters.  
For more details watch this video

%[https://www.youtube.com/watch?v=SDTZgHmxodw] 

📌 **What’s Next?**  
I’m working on setting up **DeepSeek AI locally with a frontend AI agent**—but due to **hardware limitations (AMD ROCm compatibility issues)**, I faced some challenges.

Stay tuned for updates!

📌 **Subscribe to my YouTube channel for more tutorials & insights:** [**Tech With Asim YouTube**](https://www.youtube.com/@TechWithAsim)

**Would you like to see more tutorials on AI ? Let me know in the comments!**

#DeepSeekAI #LMStudio #RunAIModelsLocally #TechWithAsim #SelfHostedAI #ArtificialIntelligence #AIForDevelopers #PrivateAI #NoCloudAI #OfflineAI