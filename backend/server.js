// routes import
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

// middleware
app.use(cors());
app.use(express.json());

// routes usage
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);