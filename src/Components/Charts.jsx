


import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Stack
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip
} from 'recharts';
import { MoreHoriz as MoreHorizIcon } from '@mui/icons-material';

const revenueData = [
  { month: 'Jan', free: 15000 },
  { month: 'Feb', free: 33000 },
  { month: 'Mar', success: 36000 },
  { month: 'Apr', free: 28000 },
  { month: 'May', free: 32000 },
  { month: 'Jun', pending: 37000 },
  { month: 'Jul', free: 34000 },
  { month: 'Aug', free: 33000 },
  { month: 'Sep', free: 11000 },
  { month: 'Oct', expense: 36000 },
  { month: 'Nov', free: 28000 },
  { month: 'Dec', free: 65000 }
];

const customerData = [
  { name: 'Current customers', value: 82.3, color: '#8884d8' },
  { name: 'New customers', value: 17.7, color: '#82ca9d' }
];

const dailyCustomersData = [
  { name: 'Daily customer', value: 18, color: '#8884d8' },
  { name: 'Remaining', value: 82, color: '#f0f0f0' }
];

const weeklyCustomersData = [
  { name: 'Weekly new customers', value: 14, color: '#82ca9d' },
  { name: 'Remaining', value: 86, color: '#f0f0f0' }
];

const Charts = () => {
  const totalRevenue = '$112,340';

  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      <Grid item xs={12} md={8}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Box>
                <Typography variant="h6" gutterBottom>
                  Revenue
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  {totalRevenue}
                </Typography>
              </Box>
              <Box>
                <IconButton>
                  <MoreHorizIcon />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ height: 300, width: '100%' }}>
              <ResponsiveContainer>
                <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis hide={true} />  
                  <Tooltip />
                  <Bar dataKey="free" fill="#A9A9A9" radius={[5, 5, 0, 0]} barSize={40} />
                  <Bar dataKey="pending" fill="#8884d8" radius={[5, 5, 0, 0]} barSize={40} />
                  <Bar dataKey="success" fill="green" radius={[5, 5, 0, 0]} barSize={40} />
                  <Bar dataKey="income" fill="#82ca9d" radius={[5, 5, 0, 0]} barSize={40} />
                  <Bar dataKey="expense" fill="#ff7c7c" radius={[5, 5, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6">
                Customers
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Customers that buy our products
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Box sx={{ width: '45%', height: 200, position: 'relative' }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={customerData}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {customerData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center'
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    {customerData[0].value}%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total
                  </Typography>
                </Box>
              </Box>

              <Stack spacing={2} sx={{ width: '45%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: '80px', height: 80 }}>
                    <ResponsiveContainer>
                      <PieChart>
                        <Pie
                          data={dailyCustomersData}
                          innerRadius={25}
                          outerRadius={35}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {dailyCustomersData.map((entry, index) => (
                            <Cell key={`daily-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </Box>
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                     + {dailyCustomersData[0].value}%
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Daily customers
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: '80px', height: 80 }}>
                    <ResponsiveContainer>
                      <PieChart>
                        <Pie
                          data={weeklyCustomersData}
                          innerRadius={25}
                          outerRadius={35}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {weeklyCustomersData.map((entry, index) => (
                            <Cell key={`weekly-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </Box>
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                     + {weeklyCustomersData[0].value}%
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Weekly new customers
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Box>

            {/* Legend */}
            <Box sx={{ mt: 2 }}>
              <Stack direction="row" spacing={2} justifyContent="center">
                {customerData.map((entry, index) => (
                  <Stack key={index} direction="row" alignItems="center" spacing={1}>
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        backgroundColor: entry.color
                      }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {entry.name}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default  Charts;