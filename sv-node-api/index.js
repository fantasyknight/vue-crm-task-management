const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

require("dotenv").config();
const { winstonLevelLogger } = require("./src/services/logger.services");
const app = express();

// Import Routes
const auth = require("./src/routes/auth.routes");
const user = require("./src/routes/user.routes");
const company = require("./src/routes/company.routes");
const dream = require("./src/routes/dream.routes");
const goal = require("./src/routes/goal.routes");
const project = require("./src/routes/project.routes");
const section = require("./src/routes/section.routes");
const task = require("./src/routes/task.routes");
const subtask = require("./src/routes/subtask.routes");
const notification = require("./src/routes/notification.routes");
const priority = require("./src/routes/priority.routes");
const status = require("./src/routes/status.routes");
const department = require("./src/routes/department.routes");
const group = require("./src/routes/group.routes");
const message = require("./src/routes/message.routes");
const aws = require("./src/routes/aws.routes");
const verify = require("./src/routes/verify.routes");
const reminder = require("./src/routes/reminder.routes");
const healthCheck = require("./src/routes/healthCheck.routes");

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", auth);
app.use("/user", user);
app.use("/company", company);
app.use("/dream", dream);
app.use("/goal", goal);
app.use("/project", project);
app.use("/section", section);
app.use("/task", task);
app.use("/subtask", subtask);
app.use("/notification", notification);
app.use("/priority", priority);
app.use("/status", status);
app.use("/department", department);
app.use("/group", group);
app.use("/message", message);
app.use("/aws/", aws);
app.use("/verify", verify);
app.use("/reminder", reminder);
app.use("/health-check", healthCheck);

const server = http.createServer(app);
const port = process.env.SERVER_PORT || 3000;

server.listen(port, () => {
  winstonLevelLogger.info(`Server is running on ${port}`);
});
