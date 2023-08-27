export const loginUser = async (formData) => {
    try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const finalData = response.json();
        return finalData;
    } catch (error) {
        console.log("error", e);
    }
}